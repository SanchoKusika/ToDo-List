import type { BoardViewMode } from "../model/boardViewStore";

interface BoardViewSwitcherProps {
	columnsLabel: string;
	listLabel: string;
	value: BoardViewMode;
	onChange: (mode: BoardViewMode) => void;
}

export const BoardViewSwitcher = ({
	columnsLabel,
	listLabel,
	value,
	onChange,
}: BoardViewSwitcherProps) => {
	return (
		<div className="board-view-switcher">
			<div className="board-view-switcher__controls">
				<button
					type="button"
					className={`board-view-switcher__btn ${value === "columns" ? "is-active" : ""}`}
					onClick={() => onChange("columns")}
					title={columnsLabel}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1zM10 15V1H6v14zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11z" />
					</svg>
				</button>
				<button
					type="button"
					className={`board-view-switcher__btn ${value === "list" ? "is-active" : ""}`}
					onClick={() => onChange("list")}
					title={listLabel}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};
