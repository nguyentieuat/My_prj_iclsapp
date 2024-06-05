import React, { useState } from 'react';
import './assets/css/portal.css';
import ImagePreview from './elements/ImagePreview';

const Partner = () => {
	const [file, setFile] = useState();

	function handleChangeUpload(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    function handleChange(e) {
        setFile(e.target.value);
    }



	return (
		<>
			<div id="app-content pt-3 p-md-3 p-lg-4">
				<div className="container-fluid">

					<div className="row">
						<div className="col-sm-7">
							<h1 className="page-header">Partner
								<small> Add</small>
							</h1>
						</div>
						<div className="col-sm-7 div-input" >
							<form action="" method="POST" encType="multipart/form-data">
								<div className="form-group form_div">
									<label>Image</label>
									<input id="imgInpBr" type="file" className="form-control" name="image" onChange={handleChangeUpload} />
								</div>
								<div className="form-group form_div" >
									<label>Link</label>
									<input id="imgInp" type="text" className="form-control" name="link" onChange={handleChange}/>
								</div>
								<div className="form-group form_div" >
									<label>Description for Image</label>
									<textarea type="text" className="form-control textarea" rows="3" name="description"></textarea>
								</div>
								<div className="form-group form_div" >
									<button type="" className="btn btn-secondary btn-input-form" >Add</button>
									<button type="reset" className="btn btn-secondary btn-input-form" >Reset</button>
								</div>
							</form>
						</div>

						<ImagePreview file={file}/>
					</div>
					
					<div className="row">
						<div className="col-sm-12">
							<h1 className="page-header">Partner
								<small> List</small>
							</h1>
						</div>
						<table className="table table-striped table-bordered table-hover" id="dataTables-example">
							<thead>
								<tr>
									<th width="10%">ID</th>
									<th width="20%">Image</th>
									<th width="40%">Description for Image</th>
									<th width="10%">Ordinal</th>
									<th width="10%">Swap</th>
									<th width="10%">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr className="odd gradeX" text-align="center">
									<td className="stt">1</td>
									<td>
										<img width="250px" height="150px" src="" />
									</td>
									<td>a</td>
									<td>b</td>
									<td>
										<form action="#" method="post">
											<input type="hidden" name="stt" value="" />
											<input className="swap" id='swap' type="text" name="swap" size="1" />
											<input type="submit" name="submit" value="Swap" className="btn btn-primary" />
										</form>
									</td>
									<td className="center">
										<p><i className="fa fa-pencil fa-fw"></i> <a href="#">Edit</a></p>
										<p><i className="fa fa-trash-o  fa-fw"></i><a href="#"> Delete</a></p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default Partner;
