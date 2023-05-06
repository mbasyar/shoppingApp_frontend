import React from "react";
import classes from "./create.module.css";


  const Create = () => {
  const [title, setTitle]= useState("")
  const [desc, setDesc]= useState("")
  const [category, setCategory]= useState("")
  const [image, setImage]= useState("")
  const [price, setPrice]= useState("")
  const [review, setReview]= useState("")


  const onChangeFile = ()=> { 

  }

  const handleCloseImg = ()=> {

  }
  
  const handleCreateProduct = async(e) => {

  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <h2 className={classes.title}>create food</h2>
      <form onSubmit={hendleCreateProduct} encType="multipart/form-data">
        <div className={classes.inputWrapper}>
          <label> Title : </label>
          <input type="text" 
            placeholder="title..." 
            className={classes.input} 
            onChange={(e)=> setTitle(e.target.value)} />
        </div>
        <div className={classes.inputWrapper}>
          <label> Description : </label>
          <input type="text" 
            placeholder="description.." 
            className={classes.input} 
            onChange={(e)=> setDesc(e.target.value)} />
        </div>
        <div className={classes.inputWrapper}>
          <label> Category : </label>
          <input type="text" 
            placeholder="Category..." 
            className={classes.input} 
            onChange={(e)=> setCategory(e.target.value)} />
        </div>
        <div className={classes.inputWrapperImage}>
          <label htmlFor="image" className={classes.labelFileInput}> Image : <span>Upload Here</span> </label>
          <input type="file" 
            id="image"
            placeholder="image..." 
            className={classes.input} 
            onChange={onChangeFile}
            style={{display: "none"}}
          />
          {image && <p className={classes.imageName}>{imageName} <AiOutlineCloseCircle onClickc={handleCloseImg} className={classes.closeIcon}/></p>}
        </div>
        <div className={classes.inputWrapper}>
          <label> Price : </label>
          <input type="number" 
            step={0.01}
            placeholder="Price..." 
            className={classes.input} 
            onChange={(e)=> setPrice(e.target.value)} />
        </div>
        <div className={classes.inputWrapper}>
          <label> Review : </label>
          <input type="number"
          step={0.1}
          min={1}
          max={5} 
            placeholder="Review..." 
            className={classes.input} 
            onChange={(e)=> setReview(e.target.value)} />
        </div>
        <div className={classes.buttonWrapper}>
          <button type="submit" className={classes.submitBtn}>
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};
    
export default Create;
