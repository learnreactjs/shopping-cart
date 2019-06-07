import React from 'react';

function IToast({ message, show , action }) {
	let icon; 
	switch(action) {
		case 'success': icon = <img src="https://cdn3.iconfinder.com/data/icons/bold-blue-glyphs-free-samples/32/Info_Circle_Symbol_Information_Letter-512.png" className="rounded mr-2" alt="..."/>; break;
		case 'danger' : icon = <img src="https://freeiconshop.com/wp-content/uploads/edd/error-flat.png" className="rounded mr-2" alt="" />; break;
		default: icon = <img src="https://cdn3.iconfinder.com/data/icons/bold-blue-glyphs-free-samples/32/Info_Circle_Symbol_Information_Letter-512.png" className="rounded mr-2" alt="..."/>;
	}

	return (
		<div style={{position: 'fixed', top: '0', right: '0' }} >
			<div 
				className="toast" 
				role="alert" 
				aria-live="assertive" 
				aria-atomic="true" 
				data-autohide="false" 
				data-delay="10000"
				style={{minWidth: '300px', opacity: show ? 1:0 }}
				>
			  <div className="toast-header">
			    {icon}
			    <strong className="mr-auto">Activity</strong>
			    <small>Just now</small>
			    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
			      <span aria-hidden="true">&times;</span>
			    </button>
			  </div>
			  <div className="toast-body">
			    {message}
			  </div>
			</div>
		</div>
	)
}

export default IToast;