export default function AppsHeading({
  totalApp,
  search,
  onSearch,
  sortBy,
  onSortBy,
}) {
  return (
    <div className="mb-4 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
      <h4 className="heading-4">({totalApp}) Apps Found</h4>

      {onSearch ? (
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search Apps"
          />
        </label>
      ) : (
        <select
          value={sortBy}
          onChange={(e) => onSortBy(e.target.value)}
          className="select appearance-none"
        >
          <option value="select" disabled={true}>
            Sort By Downloads
          </option>
          <option value="high">High-Low</option>
          <option value="low">Low-High</option>
        </select>
      )}
    </div>
  );
}
