import './grid.component.css';
import React from 'react';
import { PencilSquare, Trash3 } from 'react-bootstrap-icons';

export function GridComponent(props) {

    function edititem(item) {
        props.edititemfromgrid(item)
    }

    function deleteitem(item) {
        props.deleteRecord(item)
    }
    return (
        <React.Fragment>
            <h3>{props.title}</h3>
            <table className="table table-bordered table-hover">
                <thead className="table-light">
                    <tr>
                        {props.headers.map((item, index) => <th key={index}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        props.body.map((item) => (
                            <tr key={item.id}>
                                {Object.values(item).map((value, index) => <td key={index}>{value}</td>)}
                                <td>
                                    <PencilSquare className='edit-icon' onClick={() => edititem(item)} /> &nbsp;
                                    <Trash3 className='delete-icon' onClick={() => deleteitem(item)} />
                                </td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}





// <label for='field-1' className='col-sm-3 control-label name'>Name</label>
// <input className='dept-name' type='text' placeholder='' id='departmentName' name='departmentName' required></input>
// <p className="emailtext">Email</p>
// <textarea className='form-control text-area'></textarea>
// <div>
//    <lable className='image-input' htmlFor="imageInput">Select image:</lable>
//    <input className='chosefile' type='file' id='imageInput' name='imageInput' accept='image/*' onChange={handleImageChange}>
//    </input>
// </div>
// <button className='save' type="submit">Save</button>