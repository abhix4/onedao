import iphone from '../../assets/iphone.avif';

// type ProductCardProps = {};

export default function ProductCard() {
  return (
    <div className="p-3 rounded product-card">
      <img
        src={iphone}
        alt="product"
        style={{ height: '270px', width: '220px', objectFit: 'cover' }}
        className="rounded"
      />
      <div className="d-flex justify-content-between mt-3">
        <div className="">
          <p className="mb-0 fw-medium">Product Name</p>
          <p className="mb-0 text-muted" style={{ fontSize: '14px' }}>
            Product description
          </p>
        </div>
        <p className="fw-medium">$25</p>
      </div>
    </div>
  );
}
