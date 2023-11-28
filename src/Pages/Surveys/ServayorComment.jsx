/* eslint-disable no-unused-vars */
import React from 'react';
import Swal from 'sweetalert2';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosHoks from '../../Hooks/UseAxiosHoks';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';

const ServayorComment = () => {
    const surveys = useLoaderData();
    const { register, handleSubmit } = useForm(); // Assuming this returns an array of survey objects
    const axiosSecure = UseAxiosHoks();
    const { user } = UseAuth();
    const onSubmit = async (data) => {
      console.log(data);

      //  now send the servay   data to the server

      const addComments = {
        email: data.email,
        name: data.name,
        surveyId: data.surveyId,
        comment: data.comment,
      };
      const servayRes = await axiosSecure.post("/addComments", addComments);
      //  const servayRes = await axiosSecure.post(
      //    `/addComment/${surveyId}`,
      //    addComment
      //  );
      console.log(servayRes.data);
      if (servayRes.data.insertedId) {
        // show  success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "your comment is submited",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };

 

  
   return (
     <div>
       {surveys.map((survey) => (
         <div
           key={survey._id}
           className=" w-4/5 text-center mx-auto min-h-[20vh] p-6 z-10 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
         >
           <h1 className=" text-2xl mt-5 "> Your Comment From </h1>

           <div>
             <form onSubmit={handleSubmit(onSubmit, survey)}>
               <div className="flex gap-10">
                 <input
                   type="hidden"
                   value={survey._id}
                   {...register("surveyId")}
                 />

                 <div className="form-control w-full my-6 ">
                   <label className="label">
                     <span className="label-text">User Email</span>
                   </label>
                   <input
                     type="email"
                     defaultValue={user?.email}
                     readOnly
                     placeholder="User Email"
                     {...register("email", { required: true })}
                     className="input input-bordered w-full "
                   />
                 </div>
                 <div className="form-control w-full my-6 ">
                   <label className="label">
                     <span className="label-text">User Name</span>
                   </label>
                   <input
                     type="text"
                     defaultValue={user?.displayName}
                     readOnly
                     placeholder="User Name"
                     {...register("name", { required: true })}
                     className="input input-bordered w-full "
                   />
                 </div>
               </div>

               <div className="form-control">
                 <label className="label">
                   <span className="label-text">comment</span>
                 </label>
                 <textarea
                   {...register("comment", { required: true })}
                   className="textarea textarea-bordered h-24"
                   placeholder="Bio"
                 ></textarea>
               </div>
               <button type="submit" className="btn mt-5">
                 Submit comment
               </button>
             </form>
           </div>
         </div>
       ))}
     </div>
   );
};

export default ServayorComment;