import { useState, useMemo } from "react";
import styles from "./Table.module.scss";

interface TableColumn {
  key: string;
  label: string;
}

interface TableRow {
  [key: string]: string | number;
}

interface TableProps {
  columns: TableColumn[];
  data: TableRow[];
}

export default function Table({ columns, data }: TableProps) {
  const [search, setSearch] = useState("");
  const [searchColumn, setSearchColumn] = useState(columns[0]?.key)!; // selected column
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  // Filtered data based on search and selected column
  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter((row) =>
      String(row[searchColumn ?? 0])
        .toLowerCase()
        ?.includes(search.toLowerCase())
    );
  }, [search, data, searchColumn]);

  // Sorted data
  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;
    return [...filteredData].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (typeof valA === "number" && typeof valB === "number") {
        return sortAsc ? valA - valB : valB - valA;
      }
      return sortAsc
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    });
  }, [filteredData, sortKey, sortAsc]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
    <div className={styles.tableWrapper}>
      {/* Controls */}
      <div className={styles.tableControls}>
        <div className={styles.filterContainer}>
          <select
            className={styles.filterDropdown}
            value={searchColumn}
            onChange={(e) => setSearchColumn(e.target.value)}
          >
            {columns.map((item) => (
              <option key={item.key} value={item.key}>
                {item.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder={`Search by ${
              columns.find((c) => c.key === searchColumn)?.label
            }...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.filterInput}
          />
        </div>
      </div>

      {/* Table */}
      <table className={styles.customTable}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} onClick={() => handleSort(col.key)}>
                {col.label}{" "}
                <span className={styles.sortIcon}>
                  {sortKey === col.key ? (sortAsc ? "↑" : "↓") : "↕"}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? styles.evenRow : styles.oddRow}
            >
              {columns.map((col) => {
                const cell = row[col.key];
                return (
                  <td
                    key={col.key}
                    className={
                      cell === "Active"
                        ? styles.statusActive
                        : cell === "Inactive"
                        ? styles.statusInactive
                        : ""
                    }
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
