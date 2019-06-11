import React from 'react';

function IToast({ toasts, location }) {
	const getIcon = (action) => {
		let icon; 
		switch(action) {
			case 'success': icon = <img src="https://cdn3.iconfinder.com/data/icons/bold-blue-glyphs-free-samples/32/Info_Circle_Symbol_Information_Letter-512.png" className="rounded mr-2" alt="..."/>; break;
			case 'danger' : icon = <img src="https://freeiconshop.com/wp-content/uploads/edd/error-flat.png" className="rounded mr-2" alt="" />; break;
			default: icon = <img src="https://cdn3.iconfinder.com/data/icons/bold-blue-glyphs-free-samples/32/Info_Circle_Symbol_Information_Letter-512.png" className="rounded mr-2" alt="..."/>;
		}
		return icon;
	}

	const toastStack = toasts.map((toast, index) => {
		return (
			<div 
				key={index}
				className="toast" 
				role="alert" 
				aria-live="assertive" 
				aria-atomic="true" 
				data-autohide="true" 
				data-delay="10000"
				style={{minWidth: '300px', opacity: 1 }}
				>
			  <div className="toast-header">
			    {getIcon(toast.action)}
			    <strong className="mr-auto">Activity</strong>
			    <small>Just now</small>
			    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
			      <span aria-hidden="true">&times;</span>
			    </button>
			  </div>
			  <div className="toast-body">
			    {toast.message}
			  </div>
			</div>
		)
	})

	const placement = {
		position: 'fixed'
	}

	switch(location) {
		case 'top': 
			placement.top = '10px';
			placement.right = '0';
			break;
		case 'bottom': 
			placement.bottom = '10px';
			placement.right = '0';
			break;
		default: 
			placement.top = '10px';
			placement.right = '0';
	}

	return (
		<div style={placement} >
			{toastStack}
		</div>
	)
}

export default IToast;