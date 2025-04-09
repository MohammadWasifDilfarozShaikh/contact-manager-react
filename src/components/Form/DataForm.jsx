import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addEntry, editEntry } from "../../redux/tableSlice";

const DataForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const editingData = useSelector((state) => state.table.editingData);

  useEffect(() => {
    if (editingData) {
      Object.keys(editingData).forEach((key) => {
        setValue(key, editingData[key]);
      });
    }
  }, [editingData, setValue]);

  const onSubmit = (data) => {
    if (editingData) {
      dispatch(editEntry({ id: editingData.id, updatedData: data }));
    } else {
      dispatch(addEntry(data));
    }
    reset();
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-xl max-w-6xl mx-auto mt-10 border border-gray-200">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 border-b pb-2">
        {editingData ? "Edit Contact" : "Add New Contact"}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Contact Fields */}
        <div className="col-span-full">
          <h3 className="text-lg font-semibold text-gray-600 border-b pb-1 mb-2">
            Contact Details
          </h3>
        </div>

        <div>
          <label>Name </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="form-input"
          />
          {errors.name && <p className="form-error">{errors.name.message}</p>}
        </div>

        <div>
          <label>Email *</label>
          <input
            {...register("email", { required: "Email is required" })}
            className="form-input"
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>
        <div>
          <label>Secondary Email</label>
          <input {...register("secondaryEmail")} className="form-input" />
        </div>
        <div>
          <label>Phone No. 1</label>
          <input {...register("phone1")} className="form-input" />
        </div>
        <div>
          <label>Phone No. 2</label>
          <input {...register("phone2")} className="form-input" />
        </div>
        <div>
          <label>Mobile No. 1</label>
          <input {...register("mobile1")} className="form-input" />
        </div>
        <div>
          <label>Mobile No. 2</label>
          <input {...register("mobile2")} className="form-input" />
        </div>
        <div>
          <label>Twitter</label>
          <input {...register("twitter")} className="form-input" />
        </div>
        <div>
          <label>Skype ID</label>
          <input {...register("skypeId")} className="form-input" />
        </div>
        <div>
          <label>LinkedIn</label>
          <input {...register("linkedin")} className="form-input" />
        </div>
        <div className="md:col-span-2">
          <label>Remark</label>
          <input {...register("remark")} className="form-input" />
        </div>
        <div>
          <label>Appointment Status</label>
          <select {...register("appointmentStatus")} className="form-input">
            <option value="">-- Select --</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <label>Appointment Date</label>
          <input
            type="date"
            {...register("appointmentDate")}
            className="form-input"
          />
        </div>
        <div>
          <label>Appointment Time</label>
          <input
            type="time"
            {...register("appointmentTime")}
            className="form-input"
          />
        </div>

        {/* Address Fields */}
        <div className="col-span-full mt-4">
          <h3 className="text-lg font-semibold text-gray-600 border-b pb-1 mb-2">
            Address
          </h3>
        </div>

        <div>
          <label>Pin Code</label>
          <input {...register("pinCode")} className="form-input" />
        </div>
        <div>
          <label>Country</label>
          <input {...register("country")} className="form-input" />
        </div>
        <div>
          <label>State</label>
          <input {...register("state")} className="form-input" />
        </div>
        <div>
          <label>City</label>
          <input {...register("city")} className="form-input" />
        </div>
        <div className="md:col-span-3">
          <label>Address Line</label>
          <input {...register("addressLine")} className="form-input w-full" />
        </div>

        {/* Submit Button */}
        <div className="col-span-full flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-200"
          >
            {editingData ? "Update Contact" : "Save Contact"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataForm;
