import './CategoryList.css';
import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';


const CategoryList = () => {
  const { categories } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="category-list-container" style={{height: '100vh',  overflowY: 'auto', overflowX: 'hidden' }}>
      <div className="row pe-2">
      </div>
      <div className="row pe-2">
        <div className="input-group mb-3">
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Search by keyword"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="input-group-text bg-warning">
            <i className="bi bi-search"></i>
          </span>
        </div>
        <div className="row g-3 pe-2">
          {categories.map((category, index) => (
            <div key = {index} className = "col-12">
              <div className="card p-3" style = {{backgroundColor: category.bgColor}}> 
              <div className="d-flex align-items-center">
                <div style = {{marginRight: '15px'}}>
                  <img src = {category.imgUrl} alt = {category.name} className = "category-image" 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  value={searchTerm}/>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1 text-white">{category.name}</h5>
                  <p className="mb-0 text-white">{category.items}5 Items</p>
                </div>
                <div>
                  <button className="btn btn-danger btn-sm"><i className="bi bi-trash"></i></button>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;