import React, { useState } from 'react'

const CustomNode = ({ id, content, data, inputs, outputs }) => {
	const [isDragging, setIsDragging] = useState(false)

	return (
		<div
			style={{
				background: '#444',
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
			<div style={{ padding: '10px' }}>{data.component.label}</div>
			<div style={{ marginTop: '20px' }}>
				{inputs.map((port) =>
					React.cloneElement(port, {
						style: { width: '50px', height: '25px', background: '#1B263B' },
					})
				)}
			</div>
			<div style={{ marginBottom: '20px' }}>
				{outputs.map((port) =>
					React.cloneElement(port, {
						style: { width: '50px', height: '25px', background: '#BADA55' },
					})
				)}
			</div>
		</div>
	)
}

export default CustomNode
