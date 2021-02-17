import React , {useState, useEffect} from 'react'
import Layout from '../../components/AdminLayout'
import Input from '../../components/Ui/Input/index'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import axios from 'axios';
import {API_URL} from '../../constants' 

const ColorsList = styled.ul`
  display: flex;
  li {
    font-size: 14px;
    color: #454545;
    height: 40px;
    background-color: #eee;
    margin-right: 20px;
    border-radius: 3px;
    line-height: 40px;
    text-align: center;
    position: relative;
    padding 0px 20px;
  }
  .cancel {
    position: absolute;
    right: 0;
    top: 0;
    color: red;
    background-color: #ddd;
    z-index: 2;
  }
`
const Previewer = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid #eee;
  position: relative;
  img {
    width: 100%;
    height: 100%
  };
  .delete-file {
    position: absolute;
    right: 0;
    top: 0;
    color: red;
    background-color: #ddd;
    z-index: 2;
  }
`
const AddProduct = () => {
    let [colors, setColors] = useState([]);
    let [ getColor, setColor ] = useState('');
    let [ name, setName ] = useState("");
    let [ price, setPrice ] = useState(0);
    let [ category , setCategory ] = useState("");
    let [ discount , setDiscount ] = useState(0);
    let [selectedFile, setFile ] = useState(null)

    const addColor = e => {
      setColors([...colors, getColor])
      setColor("")
      e.target.previousElementSibling.value = ""
    }
    const deletColor = (deletIndex) => {
      let newColors = colors.filter((color , index) => index !== deletIndex)
      setColors(newColors)
    }
    let colorsChoosed = colors.map((color, index) => {
      return <li key={index}>
          <span>{color}</span>
          <FaTimes className="cancel" onClick={() => deletColor(index)}/>
        </li>;
    })
    const handelSubmit = e => {
      e.preventDefault();
      console.log(e.currentTarget )
      const formData = new FormData();
      formData.append("productImage", selectedFile)
      formData.append("name", name)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("discount", discount)
      formData.append("colors", JSON.stringify(colors))
      axios.post(`${API_URL}products/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
    return (
        <Layout>
            <section className="offset-1 col-10">
                <h4 className="h2 text-violet text-center pb-3">Add Product</h4>
                <form onSubmit={handelSubmit}>
                    <Input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
                    <Input type="text" placeholder="category" onChange={(e) => setCategory(e.target.value)}/>
                    <Input type="number" placeholder="discount" onChange={(e) => setDiscount(e.target.value)}/>
                    <Input type="number" placeholder="price" onChange={(e) => setPrice(e.target.value)}/>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control shadow-none" onChange={e => setColor(e.target.value)}/>
                      <button className="btn btn-outline-secondary shadow-none" type="button" onClick={addColor}>Button</button>
                    </div>
                    <ColorsList className="list-unstyled">
                      {colorsChoosed}
                    </ColorsList>
                    {selectedFile ? (
                        <Previewer>
                          <img src={URL.createObjectURL(selectedFile)}/>
                          <FaTimes className="delete-file" onClick={() => setFile(null)}/>
                        </Previewer>
                    ): ( <div className="custom-file">
                        <input type="file" className="custom-file-input" onChange={e => {
                          setFile(e.target.files[0])
                        }}/>
                        <label className="custom-file-label">Choose file</label>
                      </div>
                    )}
                    <input type="submit" class="btn btn-primary btn-lg btn-block shadow-none mt-4 mb-5" value="Add Product"/>
                </form>
            </section>
        </Layout>
    )
}

export default AddProduct