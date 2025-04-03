import styled from 'styled-components'

interface FilterButtonProps {
	$active?: boolean
}
interface PriorityBadgeProps {
	$priority: 'low' | 'medium' | 'high'
}

export const ListContainer = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const ItemContainer = styled.div`
	margin-top: 16px;
	border-radius: 8px;
	background: white;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const ItemHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
`
export const ItemFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 12px;
	font-size: 0.9rem;
	color: #666;
`

export const TitleInput = styled.input`
	width: 70%;
	padding: 8px;
	border: 1px solid #ddd;
	border-radius: 4px;
`
export const DescriptionTextarea = styled.textarea`
	width: 100%;
	min-height: 80px;
	padding: 8px;
	border: 1px solid #ddd;
	border-radius: 4px;
	resize: vertical;
`
export const PrioritySelect = styled.select`
	padding: 8px;
	border: 1px solid #ddd;
	border-radius: 4px;
`

export const FilterButton = styled.button<FilterButtonProps>`
	padding: 6px 12px;
	margin-right: 8px;
	border: none;
	border-radius: 4px;
	background: ${(props) => (props.$active ? '#007bff' : '#e0e0e0')};
	color: ${(props) => (props.$active ? 'white' : '#333')};
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background: ${(props) => (props.$active ? '#0056b3' : '#d0d0d0')};
	}
`
export const EditButton = styled.button`
	padding: 6px 12px;
	margin-right: 8px;
	background: #ffc107;
	color: #333;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`
export const SaveButton = styled.button`
	padding: 6px 12px;
	background: #28a745;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`
export const CancelButton = styled.button`
	padding: 6px 12px;
	margin-left: 8px;
	background: #dc3545;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`
export const DeleteButton = styled.button`
	padding: 6px 12px;
	background: #dc3545;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
`

export const PriorityBadge = styled.span<PriorityBadgeProps>`
	padding: 4px 8px;
	border-radius: 12px;
	font-size: 0.8rem;
	background: ${(props) =>
		props.$priority === 'high'
			? '#dc3545'
			: props.$priority === 'medium'
			? '#ffc107'
			: '#28a745'};
	color: ${(props) => (props.$priority === 'medium' ? '#333' : 'white')};
`

export const EmptyMessage = styled.div`
	text-align: center;
	padding: 20px;
	color: #666;
	font-style: italic;
`
