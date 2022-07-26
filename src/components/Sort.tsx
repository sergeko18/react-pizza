import React from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../redux/filter/slice";
import { SortType } from "../redux/filter/types";

export const sortList: SortType[] = [
  { name: "popularity(a–z)", sortApiName: "rating" },
  { name: "popularity(z–a)", sortApiName: "-rating" },
  { name: "price(a–z)", sortApiName: "price" },
  { name: "price(z–a)", sortApiName: "-price" },
  { name: "alphabet(a–z)", sortApiName: "-name" },
  { name: "alphabet(z–a)", sortApiName: "name" },
];

type SortProps = {
  sort: {
    name: string;
    sortApiName: string;
  };
};

const Sort: React.FC<SortProps> = React.memo((props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const onClickSetSelected = (obj: SortType) => {
    return dispatch(setSort(obj)), setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const _event = event as MouseEvent & {
        // MouseEvent had't have the "path" befor(that made only for TypeScript)
        path: Node[];
      };
      if (sortRef.current && !_event.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div onClick={() => setOpen(!open)} className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span>{props.sort.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortList.map((v, i) => (
              <li
                key={i}
                onClick={() => onClickSetSelected(v)}
                className={
                  v.sortApiName === props.sort.sortApiName ? "active" : ""
                }
              >
                {v.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default Sort;
