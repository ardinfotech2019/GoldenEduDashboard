export const errorMessage = (errCode) => {
    let error;
    switch (errCode) {
      case "auth/user-not-found":
        error = "Opps user not found";
        break;
      case "auth/wrong-password":
        error = "Wrong password";
        break;
      case "auth/invalid-password":
        error = "Invalid password";
        break;
      case "auth/uid-already-exists":
        error = "User already exists";
        break;
      case "auth/email-already-exists":
        error = "Email already exists";
        break;
      case "auth/invalid-email":
        error = "Invalid email";
        break;
      case "auth/too-many-requests":
        error = "Temporarily disabled due to many failed attempts";
    }
    return error;
  };
  