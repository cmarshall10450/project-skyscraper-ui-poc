import React, { useState } from 'react'

const CustomNode = ({ id, content, data, inputs, outputs }) => {
	const [isDragging, setIsDragging] = useState(false)

	console.log(data)
	return (
		<div
			style={{
				background: data.component.nodeColor,
				borderRadius: '10px',
				color: 'white',
			}}
			onClick={() =>
				isDragging
					? () => {}
					: data.nodeSelectedFn({ id, content, data, inputs, outputs })
			}
			onDrag={() => setIsDragging(true)}
			onDragEnd={() => setIsDragging(false)}>
			<div style={{ padding: '30px' }}>{data.component.label}</div>
			<div style={{ marginTop: '20px' }}>
				{inputs.map((port) =>
					React.cloneElement(port, {
						style: {
							position: 'absolute',
							bottom: '50%',
							left: '-10px',
							width: '20px',
							height: '20px',
							background: '#e1e1e1',
							borderRadius: '50%',
						},
					})
				)}
			</div>
			<div style={{ marginBottom: '20px' }}>
				{outputs.map((port) =>
					React.cloneElement(port, {
						style: {
							position: 'absolute',
							bottom: '50%',
							right: '-10px',
							width: '20px',
							height: '20px',
							background: '#e1e1e1',
							borderRadius: '50%',
						},
					})
				)}
			</div>
		</div>
	)
}

export default CustomNode
