/**
 * Fetches products with pagination, search, sorting, and category filtering.
 *
 * @async
 * @function fetchProducts
 * @param {number} page - The current page number for pagination.
 * @param {string} [search] - The search term for filtering products.
 * @param {string} [sort] - The sorting option in the format "sortBy-order" (e.g., "price-asc").
 * @param {string} [category] - The category to filter products by.
 * @param {string} [cursor] - The cursor for pagination (last document's ID from previous page).
 * @returns {Promise<Array>} - A promise that resolves to an array of products.
 * @throws {Error} - Throws an error if the request fails.
 */
export async function fetchProducts(page, search, sort, category, cursor = null) {
  const limit = 20;

  let url = `/api/products?page=${page}&limit=${limit}`;

  if (search) url += `&search=${encodeURIComponent(search)}`;
  if (category) url += `&category=${encodeURIComponent(category)}`;
  if (sort) {
    const [sortBy, order] = sort.split("-");
    url += `&sortBy=${sortBy}&order=${order}`;
  }
  if (cursor) {
    url += `&cursor=${cursor}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
