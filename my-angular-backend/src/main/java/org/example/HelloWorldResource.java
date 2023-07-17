package org.example;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Application;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.Collections;
import java.util.Set;

@ApplicationPath("rest")
@Path("/")
public class HelloWorldResource extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        return Collections.singleton(HelloWorldResource.class);
    }

    @GET
    @Path("hello")
    public String sayHello() {
        return "Hello, World!";
    }

    @POST
    @Path("uppercase")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response toUppercase(ToUppercaseRequest request) {
        return Response.ok(request.getMessage().toUpperCase()).build();
    }
}
