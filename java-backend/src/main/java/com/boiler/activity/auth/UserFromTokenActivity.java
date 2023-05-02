package com.boiler.activity.auth;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.boiler.activity.auth.Requests.UserFromTokenRequest;
import com.boiler.activity.auth.Responses.LoginResponse;
import com.boiler.auth.UserAuthService;
import com.boiler.dynamodb.DAOs.UserDao;
import com.boiler.dynamodb.models.User;

public class UserFromTokenActivity implements RequestHandler<UserFromTokenRequest, LoginResponse> {

    @Override
    public LoginResponse handleRequest(UserFromTokenRequest request, Context context) {
        // Extract email and password from request
        String token = request.getToken();

        UserAuthService userAuthService = new UserAuthService(new UserDao());

        // Call signupWithEmailAndPassword function with email and password
        User userResponse = userAuthService.getUserFromToken(token);

        LoginResponse loginResponse = new LoginResponse(userResponse, token);

        // Return the response
        return loginResponse;
    }
}
