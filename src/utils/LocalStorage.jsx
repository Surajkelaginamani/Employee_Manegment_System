const employees = [
  {
    name: "Rahul Sharma",
    email: "rahul.sharma@company.com",
    password: "rahul@123",

    taskCount: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Build Login Page",
        description: "Create login page UI using React and Tailwind CSS",
        date: "2025-01-10",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix Navbar Bug",
        description: "Resolve navbar alignment issue on mobile view",
        date: "2025-01-05",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "API Integration",
        description: "Integrate authentication API",
        date: "2025-01-03",
        category: "Development"
      }
    ]
  },

  {
    name: "Priya Verma",
    email: "priya.verma@company.com",
    password: "priya@123",

    taskCount: {
      total: 3,
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test Signup Flow",
        description: "Perform manual testing of signup process",
        date: "2025-01-12",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Write Test Cases",
        description: "Prepare test cases for login module",
        date: "2025-01-08",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Automation Script",
        description: "Create automation script for form validation",
        date: "2025-01-06",
        category: "Automation"
      }
    ]
  },

  {
    name: "Amit Patil",
    email: "amit.patil@company.com",
    password: "amit@123",

    taskCount: {
      total: 3,
      active: 1,  
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Dashboard",
        description: "Create admin dashboard UI layout",
        date: "2025-01-11",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Create Wireframes",
        description: "Design wireframes for employee panel",
        date: "2025-01-07",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "User Research",
        description: "Conduct user research interviews",
        date: "2025-01-04",
        category: "Research"
      }
    ]
  }
];

const admin = {
  name: "Admin User",
  email: "admin@company.com",
  password: "admin@123"
};

export const setlocalstorage = () => {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("admin")) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getlocalstorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return { employeesData, adminData };
};

