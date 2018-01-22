/*
|----------------------------------------------
| setting up welcome component
| @author: jahid haque <jahid.haque@yahoo.com>
| @copyright: 19dnorth, 2018
|----------------------------------------------
*/
import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    
    render() {
        return(
            <div className='full-page-container welcome'>
            	<div className='container'>
            		<div className = 'row'>
            			<div className='col-md-8 col-md-offset-2'>
            				<div className='hero-static'>
            						<h1 className='light text-center big-hero-title clrw '>Modern Approach, Modern Technology, 100% user statisfaction.</h1>
            						<hr className = 'clrw' />
            						<p className = 'lead text-center light title clrw'>Create web application with latest and fastest growing technlogy. 
            						with 100% user statisfaction and care with every bytes. </p>
            						<br/> 
            						<div className = 'btn-group ml-auto mr-auto'>
            							<a href='#' title='Check' className='m-l-3 btn btn-danger'>Check out tech stack</a>
            							<a href='#' title='Check' className='btn btn-success'>Signup for free information</a>
            						</div>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>
        );
    }
}  


ReactDOM.render(<Welcome />, document.getElementById('welcome'));