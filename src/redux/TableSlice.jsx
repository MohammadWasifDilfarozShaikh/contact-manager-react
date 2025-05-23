import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entries: [
    {
      
      id: 1,
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      secondaryEmail: "amit.alt@example.com",
      phone1: "9876543210",
      phone2: "9123456780",
      mobile1: "9988776655",
      mobile2: "8877665544",
      twitter: "@amitsharma",
      skypeId: "amit.skype",
      linkedin: "linkedin.com/in/amitsharma",
      remark: "Interested in demo",
      appointmentStatus: "Yes",
      appointmentDate: "2025-04-15",
      appointmentTime: "11:00",
      pinCode: "400001",
      country: "India",
      state: "Maharashtra",
      city: "Mumbai",
      addressLine: "Dadar West",
    },
    {
      id: 2,
      name: "Sneha Patel",
      email: "sneha.patel@example.com",
      secondaryEmail: "sneha.alt@example.com",
      phone1: "9822334455",
      phone2: "9988776655",
      mobile1: "9123456789",
      mobile2: "9876543210",
      twitter: "@snehapatel",
      skypeId: "sneha.skype",
      linkedin: "linkedin.com/in/snehapatel",
      remark: "Follow up next week",
      appointmentStatus: "No",
      appointmentDate: "2025-04-18",
      appointmentTime: "14:30",
      pinCode: "110001",
      country: "India",
      state: "Delhi",
      city: "New Delhi",
      addressLine: "Connaught Place",
    },
    {
      id: 3,
      name: "Ravi Mehra",
      email: "ravi.mehra@example.com",
      secondaryEmail: "",
      phone1: "9012345678",
      phone2: "",
      mobile1: "9977554433",
      mobile2: "",
      twitter: "@ravimehra",
      skypeId: "",
      linkedin: "linkedin.com/in/ravimehra",
      remark: "Interested in training",
      appointmentStatus: "Yes",
      appointmentDate: "2025-04-10",
      appointmentTime: "10:30",
      pinCode: "700001",
      country: "India",
      state: "West Bengal",
      city: "Kolkata",
      addressLine: "Park Street",
    },
    {
      id: 4,
      name: "Neha Kapoor",
      email: "neha.kapoor@example.com",
      secondaryEmail: "neha.k@example.com",
      phone1: "9856743210",
      phone2: "9832165478",
      mobile1: "9988771122",
      mobile2: "9966554433",
      twitter: "@nehakapoor",
      skypeId: "neha.kap",
      linkedin: "linkedin.com/in/nehakapoor",
      remark: "Demo booked",
      appointmentStatus: "Yes",
      appointmentDate: "2025-04-20",
      appointmentTime: "12:00",
      pinCode: "600001",
      country: "India",
      state: "Tamil Nadu",
      city: "Chennai",
      addressLine: "T Nagar",
    },
    {
      id: 5,
      name: "Raj Verma",
      email: "raj.verma@example.com",
      secondaryEmail: "",
      phone1: "9800112233",
      phone2: "9800554433",
      mobile1: "9911223344",
      mobile2: "9988998877",
      twitter: "",
      skypeId: "rajv.skype",
      linkedin: "",
      remark: "Send brochure",
      appointmentStatus: "No",
      appointmentDate: "",
      appointmentTime: "",
      pinCode: "500001",
      country: "India",
      state: "Telangana",
      city: "Hyderabad",
      addressLine: "Hitech City",
    },
    {
      id: 6,
      name: "Kiran Desai",
      email: "kiran.desai@example.com",
      secondaryEmail: "",
      phone1: "9876234567",
      phone2: "",
      mobile1: "9765432109",
      mobile2: "",
      twitter: "@kirandesai",
      skypeId: "",
      linkedin: "linkedin.com/in/kirandesai",
      remark: "Asked for trial",
      appointmentStatus: "Yes",
      appointmentDate: "2025-04-22",
      appointmentTime: "16:00",
      pinCode: "380001",
      country: "India",
      state: "Gujarat",
      city: "Ahmedabad",
      addressLine: "CG Road",
    },
    {
      id: 7,
      name: "Divya Joshi",
      email: "divya.joshi@example.com",
      secondaryEmail: "",
      phone1: "9999888877",
      phone2: "",
      mobile1: "9123567890",
      mobile2: "",
      twitter: "",
      skypeId: "",
      linkedin: "",
      remark: "",
      appointmentStatus: "No",
      appointmentDate: "",
      appointmentTime: "",
      pinCode: "302001",
      country: "India",
      state: "Rajasthan",
      city: "Jaipur",
      addressLine: "MI Road",
    },
    {
      id: 8,
      name: "Ankur Jain",
      email: "ankur.jain@example.com",
      secondaryEmail: "",
      phone1: "9811122334",
      phone2: "",
      mobile1: "9977551122",
      mobile2: "",
      twitter: "@ankurjain",
      skypeId: "ankur.skype",
      linkedin: "linkedin.com/in/ankurjain",
      remark: "Waiting for callback",
      appointmentStatus: "Yes",
      appointmentDate: "2025-04-25",
      appointmentTime: "15:00",
      pinCode: "201301",
      country: "India",
      state: "Uttar Pradesh",
      city: "Noida",
      addressLine: "Sector 62",
    },
    {
      id: 9,
      name: "Priya Nair",
      email: "priya.nair@example.com",
      secondaryEmail: "",
      phone1: "9821456789",
      phone2: "",
      mobile1: "9812345678",
      mobile2: "",
      twitter: "",
      skypeId: "",
      linkedin: "linkedin.com/in/priyanair",
      remark: "Asked for pricing",
      appointmentStatus: "No",
      appointmentDate: "",
      appointmentTime: "",
      pinCode: "682001",
      country: "India",
      state: "Kerala",
      city: "Kochi",
      addressLine: "MG Road",
    },
    {
      id: 10,
      name: "Manish Kumar",
      email: "manish.kumar@example.com",
      secondaryEmail: "",
      phone1: "9812223344",
      phone2: "",
      mobile1: "9911223344",
      mobile2: "",
      twitter: "@manishk",
      skypeId: "manish.skype",
      linkedin: "",
      remark: "Email sent",
      appointmentStatus: "Yes",
      appointmentDate: "2025-04-26",
      appointmentTime: "09:30",
      pinCode: "121001",
      country: "India",
      state: "Haryana",
      city: "Faridabad",
      addressLine: "NIT Sector",
    },
    {
      id: 11,
      name: "Ayesha Khan",
      email: "ayesha.khan@example.com",
      secondaryEmail: "",
      phone1: "9811234567",
      phone2: "",
      mobile1: "9988776655",
      mobile2: "",
      twitter: "@ayeshak",
      skypeId: "",
      linkedin: "linkedin.com/in/ayeshakhan",
      remark: "Wants demo video",
      appointmentStatus: "Yes",
      appointmentDate: "2025-04-28",
      appointmentTime: "11:15",
      pinCode: "500081",
      country: "India",
      state: "Telangana",
      city: "Hyderabad",
      addressLine: "Gachibowli",
    },
    {
      id: 12,
      name: "Deepak Singh",
      email: "deepak.singh@example.com",
      secondaryEmail: "",
      phone1: "9911223345",
      phone2: "",
      mobile1: "9876543212",
      mobile2: "",
      twitter: "",
      skypeId: "deepak.skype",
      linkedin: "",
      remark: "",
      appointmentStatus: "No",
      appointmentDate: "",
      appointmentTime: "",
      pinCode: "826001",
      country: "India",
      state: "Jharkhand",
      city: "Dhanbad",
      addressLine: "Bank More",
    },
    {
      id: 13,
      name: "Ritika Sharma",
      email: "ritika.sharma@example.com",
      secondaryEmail: "",
      phone1: "9819992233",
      phone2: "",
      mobile1: "9911332255",
      mobile2: "",
      twitter: "@ritikash",
      skypeId: "",
      linkedin: "linkedin.com/in/ritikasharma",
      remark: "Follow-up in 2 weeks",
      appointmentStatus: "Yes",
      appointmentDate: "2025-05-02",
      appointmentTime: "12:30",
      pinCode: "452001",
      country: "India",
      state: "Madhya Pradesh",
      city: "Indore",
      addressLine: "Vijay Nagar",
    },
    {
      id: 14,
      name: "Aditya Rawat",
      email: "aditya.rawat@example.com",
      secondaryEmail: "",
      phone1: "9800332211",
      phone2: "",
      mobile1: "9822113344",
      mobile2: "",
      twitter: "@adityarawat",
      skypeId: "",
      linkedin: "",
      remark: "Requested free trial",
      appointmentStatus: "Yes",
      appointmentDate: "2025-05-03",
      appointmentTime: "10:00",
      pinCode: "110020",
      country: "India",
      state: "Delhi",
      city: "New Delhi",
      addressLine: "Lajpat Nagar",
    },
    {
      id: 15,
      name: "Meenal Deshpande",
      email: "meenal.deshpande@example.com",
      secondaryEmail: "",
      phone1: "9845123456",
      phone2: "",
      mobile1: "9445123456",
      mobile2: "",
      twitter: "@meenal_d",
      skypeId: "",
      linkedin: "linkedin.com/in/meenaldeshpande",
      remark: "",
      appointmentStatus: "No",
      appointmentDate: "",
      appointmentTime: "",
      pinCode: "560001",
      country: "India",
      state: "Karnataka",
      city: "Bangalore",
      addressLine: "Indiranagar",
    },
    {
      id: 16,
      name: "Farhan Ali",
      email: "farhan.ali@example.com",
      secondaryEmail: "",
      phone1: "9810098100",
      phone2: "",
      mobile1: "9933445566",
      mobile2: "",
      twitter: "@farhanali",
      skypeId: "farhan.skype",
      linkedin: "",
      remark: "Interested in enterprise plan",
      appointmentStatus: "Yes",
      appointmentDate: "2025-04-30",
      appointmentTime: "13:00",
      pinCode: "210001",
      country: "India",
      state: "Uttar Pradesh",
      city: "Kanpur",
      addressLine: "Mall Road",
    },
    {
      id: 17,
      name: "Shruti Rao",
      email: "shruti.rao@example.com",
      secondaryEmail: "",
      phone1: "9988771122",
      phone2: "",
      mobile1: "9877654321",
      mobile2: "",
      twitter: "",
      skypeId: "",
      linkedin: "linkedin.com/in/shrutirao",
      remark: "Needs invoice",
      appointmentStatus: "No",
      appointmentDate: "",
      appointmentTime: "",
      pinCode: "400703",
      country: "India",
      state: "Maharashtra",
      city: "Navi Mumbai",
      addressLine: "Vashi",
    },
    {
      id: 18,
      name: "Mohit Arora",
      email: "mohit.arora@example.com",
      secondaryEmail: "",
      phone1: "9811122334",
      phone2: "",
      mobile1: "9988998899",
      mobile2: "",
      twitter: "@mohitarora",
      skypeId: "",
      linkedin: "",
      remark: "Wants product comparison",
      appointmentStatus: "Yes",
      appointmentDate: "2025-05-05",
      appointmentTime: "14:00",
      pinCode: "122001",
      country: "India",
      state: "Haryana",
      city: "Gurgaon",
      addressLine: "Cyber City",
    },
    {
      id: 19,
      name: "Tanvi Singh",
      email: "tanvi.singh@example.com",
      secondaryEmail: "",
      phone1: "9900112233",
      phone2: "",
      mobile1: "9877898765",
      mobile2: "",
      twitter: "@tanvisingh",
      skypeId: "",
      linkedin: "linkedin.com/in/tanvisingh",
      remark: "Needs call tomorrow",
      appointmentStatus: "Yes",
      appointmentDate: "2025-05-01",
      appointmentTime: "11:45",
      pinCode: "411001",
      country: "India",
      state: "Maharashtra",
      city: "Pune",
      addressLine: "FC Road",
    },
    {
      id: 20,
      name: "Arjun Yadav",
      email: "arjun.yadav@example.com",
      secondaryEmail: "",
      phone1: "9811223344",
      phone2: "",
      mobile1: "9911223344",
      mobile2: "",
      twitter: "@arjunyadav",
      skypeId: "",
      linkedin: "",
      remark: "Interested in collaboration",
      appointmentStatus: "No",
      appointmentDate: "",
      appointmentTime: "",
      pinCode: "208001",
      country: "India",
      state: "Uttar Pradesh",
      city: "Kanpur",
      addressLine: "Arya Nagar",
    }
    
  ],
  editingData: null, // optional for edit feature
};


const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addEntry: (state, action) => {
      const newEntry = {
        id: Date.now(),
        ...action.payload,
      };
      state.entries.push(newEntry);
    },
    editEntry: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.entries.findIndex((entry) => entry.id === id);
      if (index !== -1) {
        state.entries[index] = { ...state.entries[index], ...updatedData };
      }
      state.editingData = null;
    },
    deleteEntry: (state, action) => {
      state.entries = state.entries.filter((entry) => entry.id !== action.payload);
    },
    setEditingData: (state, action) => {
      state.editingData = action.payload;
    },
  },
});

export const { addEntry, editEntry, deleteEntry, setEditingData } = tableSlice.actions;
export default tableSlice.reducer;

