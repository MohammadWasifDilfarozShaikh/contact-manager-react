import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEntry, setEditingData } from "../../redux/tableSlice";
import { FaSortUp, FaSortDown, FaEdit, FaTrash } from "react-icons/fa";

const DataTable = () => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.table.entries);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "phone1", label: "Phone" },
    { key: "appointmentDate", label: "Appointment Date" },
    { key: "appointmentStatus", label: "Status" },
  ];
  

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) =>
      Object.values(entry).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [entries, searchTerm]);

  const sortedEntries = useMemo(() => {
    if (!sortConfig.key) return filteredEntries;

    const sorted = [...filteredEntries].sort((a, b) => {
      const aVal = a[sortConfig.key] || "";
      const bVal = b[sortConfig.key] || "";

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredEntries, sortConfig]);

  const totalPages = Math.ceil(sortedEntries.length / itemsPerPage);
  const paginatedEntries = sortedEntries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const handleEdit = (entry) => {
    dispatch(setEditingData(entry));
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to form
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteEntry(id));
    }
  };
  

  return (
    
    <div className="bg-white shadow-md p-4 rounded-lg overflow-x-auto">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded w-full max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="min-w-full table-auto border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-2 cursor-pointer text-left"
                onClick={() => handleSort(col.key)}
              >
                {col.label}
                {sortConfig.key === col.key &&
                  (sortConfig.direction === "asc" ? (
                    <FaSortUp className="inline ml-1" />
                  ) : (
                    <FaSortDown className="inline ml-1" />
                  ))}
              </th>
            ))}
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEntries.length > 0 ? (
            paginatedEntries.map((entry) => (
              <tr key={entry.id} className="border-t border-gray-200 hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2">{entry[col.key] || "-"}</td>
                ))}
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(entry)}
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    className="text-red-600 hover:underline flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="text-center py-4 text-gray-500">
                No entries found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
