import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Container } from 'react-bootstrap'

const initialValues = {
    firstname: '',
    email: '',
    phone: '',
    Message: ''
}


const onSubmit = values => {
    console.log('form data', values);
}

const validationSchema = yup.object({
    firstname: yup.string().required("Please fill out this field."),
    email: yup.string().email('invalid address...').required("Please fill out this field."),
    phone: yup.string().required("Please fill out this field."),
    Message: yup.string().required("Please fill out this field."),
})

const Contact_Two = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    console.log('formikdata', formik.values);
    console.log('form error', formik.errors);
    console.log('form blur', formik.touched);
    return (
        <div>
    <Container>
                <section className='flex justify-between max-xl:block '>
                    <div className='w-[48%] max-xl:w-auto'>
                        <div className='w-[100%] flex justify-center '>
                            <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/contact-img-1.jpg" alt="" className='max-xl:h-[50vh] w-[100vw] max-md:h-auto object-cover'/>
                        </div>
                    </div>
                    <div className='w-[48%] max-xl:w-auto flex justify-center'>
                        <div className='w-full mx-[20px] my-[40px] max-md:mx-[10px]'>
                            <section>
                                <div>
                                    <p className='text-[#d87f7f]'>We Are Happy To Answer You</p>
                                    <label htmlFor="" className='pt-[23px] pb-[30px] text-[40px] font-medium max-md:text-[30px]'>Contact</label>
                                </div>
                            </section>
                            <section className='flex justify-between mb-[30px] max-md:block'>
                                <div className='col-6 max-md:w-[100%] max-md:mb-[15px]'>
                                    <h3 className='text-[18px] font-bold mb-[20px] max-md:mb-[10px]'>Address:</h3>
                                    <span className='text-[17px] tracking-wide text-muted'> 121 King St, Melbourne VIC 3000, Australia</span>
                                </div>
                                <div className='col-6 max-md:w-[100%]'>
                                    <div className='flex items-center mb-[15px]'><h3 className='text-[18px] font-bold'>Telephone : </h3><span className='text-muted tracking-wide'>&nbsp;888 321 9874</span></div>
                                    <div className='flex items-center'><h3 className='text-[18px] font-bold'>Email : </h3><span className='text-muted'>&nbsp; info@example.com</span></div>
                                </div>
                            </section>

                            <section>
                                <div>
                                    <p className='text-[#d87f7f]'>Need Help</p>
                                    <label htmlFor="">
                                        <h3 className='pt-[7px] pb-[10px] text-[38px] font-medium max-md:text-[25px]'>Send Your Request</h3>
                                    </label>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className='border-[1px] border-[#d9d9d9] py-[10px] ps-[10px] mb-[15px]'>
                                            <input type="text" name="firstname" id="firstname" values={formik.values.firstname} onChange={formik.handleChange} placeholder='Name' className='outline-none' onBlur={formik.handleBlur}/>
                                        </div>
                                            {
                                                formik.touched.firstname && formik.errors.firstname ? <div className='text-red-600'>{formik.errors.firstname}</div> : null
                                            }
                                        <div className='border-[1px] border-[#d9d9d9] py-[10px] ps-[10px] mb-[15px]'>
                                            <input type="email" name='email' id='email' value={formik.values.email} onChange={formik.handleChange} placeholder='Email' className='outline-none' onBlur={formik.handleBlur} />
                                        </div>
                                            {
                                                formik.touched.email && formik.errors.email ? <div className='text-red-600'>{formik.errors.email}</div> : null
                                            }
                                        <div className='border-[1px] border-[#d9d9d9] py-[10px] ps-[10px] mb-[15px]'>
                                            <input type="tel" name="phone" id="phone" values={formik.values.phone} onChange={formik.handleChange} placeholder='Phone'  className='outline-none' onBlur={formik.handleBlur}/>
                                        </div>
                                            {
                                                formik.touched.phone && formik.errors.phone ? <div className='text-red-600'>{formik.errors.phone}</div> : null
                                            }
                                        <div >
                                           <textarea name="Message" id="Message" rows={6} cols={40} value={formik.values.Message} onChange={formik.handleChange} placeholder='Message' className='outline-none border-[1px] border-[#d9d9d9] pt-[10px] ps-[10px] mb-[15px] w-[100%]' onBlur={formik.handleBlur}></textarea>
                                        </div>
                                           {
                                            formik.touched.Message && formik.errors.Message ? <div className='text-red-600'>{formik.errors.Message}</div> : null
                                           }
                                        <button className='bg-black text-white w-full py-[15px] text-center'>Send Message</button>
                                    </form>
                                </div>
                            </section>
                        </div>

                    </div>
                </section>
</Container>
            </div>
    )
}

export default Contact_Two
