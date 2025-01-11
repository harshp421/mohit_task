

const BlogList = ({blog}:any) => {
  return blog.type === "Job" ? (
    <div className="card mb-4 shadow-sm" key={blog.id}>
      <div className="card-body">
        {/* Job Type */}
        <div className="text-muted mb-2 d-flex align-items-center">
          <span role="img" aria-label="Job">
            💼
          </span>
          <span className="ms-2">{blog.type}</span>
        </div>

        {/* Title */}
        <h5 className="card-title fw-bold">{blog.title}</h5>

        {/* Company and Location */}
        <p className="card-text text-muted mb-1">
          <i className="bi bi-building"></i> {blog.company}
        </p>
        <p className="card-text text-muted">
          <i className="bi bi-geo-alt"></i> {blog.location}
        </p>

        {/* Button */}
        <a
          href="#!"
          className="btn btn-outline-success d-block fw-bold mb-3"
        >
          {blog.buttonText}
        </a>

        {/* Author and Views */}
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
              }}
            />
            <span className="ms-2">{blog.author}</span>
          </div>
          <div className="text-muted d-flex align-items-center">
            <i className="bi bi-eye"></i>
            <span className="ms-1">{blog.views}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="card mb-4 shadow-sm" key={blog.id}>
      {/* Image Section */}
      <img
        src={blog.image}
        className="card-img-top"
        alt={blog.title}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body">
        {/* Blog Type */}
        <div className="text-muted mb-2 d-flex align-items-center">
          <span role="img" aria-label="Article">
            ✍️
          </span>
          <span className="ms-2">{blog.type}</span>
        </div>

        {/* Title */}
        <h5 className="card-title fw-bold">{blog.title}</h5>

        {/* Description */}
        <p className="card-text text-muted">{blog.description}</p>

        {/* Author and Views */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="d-flex align-items-center">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="rounded-circle"
              style={{
                width: "40px",
                height: "40px",
                objectFit: "cover",
              }}
            />
            <span className="ms-2">{blog.author}</span>
          </div>
          <div className="text-muted d-flex align-items-center">
            <i className="bi bi-eye"></i>
            <span className="ms-1">{blog.views}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList