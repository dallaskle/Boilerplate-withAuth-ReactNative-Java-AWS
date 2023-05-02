package com.boiler.activity.auth;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.boiler.activity.auth.Requests.LoginRequest;
import com.boiler.activity.auth.Responses.LoginResponse;
import com.boiler.auth.UserAuthService;
import com.boiler.dynamodb.DAOs.UserDao;

public class LoginActivity implements RequestHandler<LoginRequest, LoginResponse> {

    @Override
    public LoginResponse handleRequest(LoginRequest request, Context context) {
        // Extract email and password from request
        String email = request.getEmail();
        String password = request.getPassword();

        UserAuthService userAuthService = new UserAuthService(new UserDao());

        // Call signupWithEmailAndPassword function with email and password
        LoginResponse response = userAuthService.loginWithEmailPassword(email, password);

        // Return the response
        return response;
    }
}
