import { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';


const CategoryForm = () => {

  //const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    description: '',
    bgColor: '#ffffff'
  });

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((data) => ({...data, [name]: value}));
  }

  useEffect(() => {
    console.log(data);
  }, [data]);


  return (
    <div className="mx-2 mt-2">
        <div className="row">
            <div className="card col-md-12 form-container">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label"><img src = {image ? URL.createObjectURL(image) : assets.upload} alt = "" width = {48} ></img>
                                <input type="file" name="image" id="image" className="form-control" hidden onChange={(e) => setImage(e.target.files[0])}/>
                            </label>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text"
                            name="name"
                            id="name" className="form-control"
                            placeholder="Category Name"
                            onChange={onChangeHandler}
                            value={data.name}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea
                            name="description"
                            id="description"
                            className="form-control"
                            placeholder="Write content here..."
                            onChange={onChangeHandler}
                            value={data.description}>
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="bgColor" className="form-label">Background Color</label>
                            <input type="color"
                            name="bgColor"
                            id="bgColor"
                            onChange={onChangeHandler}
                            value={data.bgColor}
                            placeholder="#ffffff"/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}

export default CategoryForm;