// //@ts-nocheck
// class ApiResponse {
//   constructor(
//     success?,
//     data?,
//     successMessage?,
//     error?,
//     errorMessage?,
//     statusCode?
//   ) {
//     this.success = success || false;
//     this.data = data || null;
//     this.successMessage = successMessage || "";
//     this.error = error || false;
//     this.errorMessage = errorMessage || "";
//     this.statusCode = statusCode || 500;
//   }
// }

// export default ApiResponse;

export const CustomApiResponse = (
  success: boolean,
  data: any,
  error: boolean
) => {
  return {
    success: false,
    data: null,
    successMessage: "",
    error: false,
    errorMessage: "",
    statusCode: 200,
  };
};

export const ApiResponse: {
  success: boolean;
  data: any;
  successMessage: string;
  error: boolean;
  errorMessage: string;
  statusCode: number;
} = {
  success: false,
  data: null,
  successMessage: "",
  error: false,
  errorMessage: "",
  statusCode: 200,
};
