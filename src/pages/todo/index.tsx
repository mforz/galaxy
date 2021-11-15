import { Button, Card, Checkbox } from 'antd';
import React from 'react';
import { history } from 'umi';
import { Icons, useUpdate } from '@/common/common';
import ActiveEllipsis from '@/components/activeEllipsis';

import './index.css'

export default React.memo((props) => {
	console.log({ props });
	const [state, setState] = useUpdate({});


	function onCheckboxChange(e){
		console.log({ e })

	}
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}> —ToDo—— </h1>
			<Button onClick={() => history.push('/')}> GoBack</Button>

			<div style={{marginTop: 30 }}> </div>

			<Card 
				className='todo_custom' 
				title={
					<div style={{ display:'flex' }} > 
						<div style={{ flex:1 }} className='progress'> 已完成： 11/33 </div>
						<div className='task'> </div> 
						<div style={{ flex:1 }}></div>
					</div>
				} 
				style={{ width: 500 }} 
				extra={ <Button className='close' icon={Icons.Close} />  }
			> 

				<div style={{ width:'100%', height:'20vh', display:'flex'}}>
					<div style={{flex:1,overflow:'hidden', height:'100%' }}>
						<ul className='todo-list'>
							{
								Array.of(1,2,3,5,6,7,8,9,4).map(i=>{
									return (
										<li key={i} className='todo-item'>
											<Checkbox 
												value={i.toString()} 
												checked={state?.checkeds?.[i]} 
												onChange={onCheckboxChange}
											> 
												<ActiveEllipsis delay={3000} maxLength={10}>Checkbox--------------{i}</ActiveEllipsis> 
											</Checkbox> 
										</li>
									)
								})
							}
						</ul>
					</div>
 
					<div style={{ flex: 1, height:'100%', border: '1px solid #ccc' }}>
						 000
					</div>
				</div>
			</Card>
		</div>
	);
});



