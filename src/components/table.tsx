import { ReactNode } from 'react';

export interface HeaderInterface {
  name: string;
  style: string;
}

interface Props {
  header: HeaderInterface[];
  children: ReactNode;
}

export const Table: React.FC<Props> = ({ header, children }) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr className="p-4 border bg-9-hover">
            {header.map((item: HeaderInterface, index: number) => (
              <th key={index} className={item.style}>
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
