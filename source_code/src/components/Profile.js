import React from "react";
export const Profile=()=> {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
            
          <img src="c:\source_code_ysr\source_code\src\components\photo.png" alt="Profile" className="img-fluid rounded-circle" />
        </div>
        <div className="col-md-8">
          <h1>Sanampudi Naga Pavani</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            <a href="#" className="btn btn-primary">View my work</a>
          </p>
        </div>
      </div>
    </div>
  );
}