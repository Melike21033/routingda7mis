 package com.roadalert.roadalert.exception;

public class MyCustomException extends RuntimeException {
    public MyCustomException(String message, Throwable cause) {
        super(message, cause);
    }

}
