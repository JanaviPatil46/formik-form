import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;

// import { useFormik } from "formik";
// import { basicSchema, advancedSchema } from "../src/schemas";
// import "./App.css";
// import { Formik } from "formik";
// import CustomSelect from "./components/CustomSelect";
// const onSubmit = async (values, actions) => {
//   console.log(values);
//   console.log(actions);
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   actions.resetForm();
// };

// const BasicForm = () => {
//   const {
//     values,
//     errors,
//     touched,
//     isSubmitting,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       signedIn: "",

//     },
//     validationSchema: basicSchema,
//     onSubmit,
//   });

//   console.log(errors);

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label htmlFor="email">Email</label>
//       <input
//         value={values.email}
//         onChange={handleChange}
//         id="email"
//         type="email"
//         placeholder="Enter your email"
//         onBlur={handleBlur}
//         className={errors.email && touched.email ? "input-error" : ""}
//       />
//       {errors.email && touched.email && <p className="error">{errors.email}</p>}

//       <label htmlFor="password">Password</label>
//       <input
//         id="password"
//         type="password"
//         placeholder="Enter your password"
//         value={values.password}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         className={errors.password && touched.password ? "input-error" : ""}
//       />
//       {errors.password && touched.password && (
//         <p className="error">{errors.password}</p>
//       )}
//       <Formik
//         initialValues={{ signedIn: ""}}
//         validationSchema={advancedSchema}
//         onSubmit={onSubmit}
//       >
//         <CustomSelect
//           label="Stay signed in for"
//           name="signedIn"
//           placeholder="select "
//         >
//           <option value="">Select signed in for</option>
//           <option value="30 Min">30 Min</option>
//           <option value="4 Hours">4 Hours</option>
//           <option value="8 Hours">8 Hours</option>
          
//         </CustomSelect>
//       </Formik>
//       <button disabled={isSubmitting} type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };
// export default BasicForm;
