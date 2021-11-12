import React from "react";
import { SignInButton } from "../AuthModal/SignInButton/SignInButton";
function ImageUpload (){


return(
<div className = "ImageUpload-Container">

<div className = "Title-card"><h2>Image Attachment</h2></div> 

<div className = "ImageBox">

</div>
<SignInButton text = "Add Image" />

</div>


)
}
export default ImageUpload;