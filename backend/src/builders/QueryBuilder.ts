import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  // Search by specific fields (e.g., title or content)
  search(searchableFields: string[]) {
    const search = this?.query?.search;

    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: search, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }

    return this;
  }

  // Filter by author or other fields
  filter() {
    const { author } = this.query;

    if (author) {
      this.modelQuery = this.modelQuery.find({ author });
    }

    return this;
  }

  // Sort by a specific field and order
  sort() {
    const sortBy = (this.query.sortBy as string) || 'createdAt'; // Default to "createdAt"
    const sortOrder = this.query.sortOrder === 'desc' ? '-' : ''; // Default to ascending order
    const sortField = `${sortOrder}${sortBy}`;

    this.modelQuery = this.modelQuery.sort(sortField);

    return this;
  }

  // Pagination
  paginate() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 10;
    const skip = (page - 1) * limit;

    this.modelQuery = this.modelQuery.skip(skip).limit(limit);

    return this;
  }

  // Select specific fields
  fields() {
    const fields =
      (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v';

    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
}

export default QueryBuilder;
