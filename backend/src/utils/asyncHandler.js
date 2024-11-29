const asyncHandler = (reqHandler) => async (req, res, next) => {
  return Promise.resolve(reqHandler(req, res, next)).catch((err) => next(err));
};

export { asyncHandler };

// This is TRY-CATCH method of doing asyncHandler task

// const asyncHandler = (reqHandler) => async (req, res, next) => {
//   try {
//     await reqHandler(req, res, next);
//   } catch (err) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// };
