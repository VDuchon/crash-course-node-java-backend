package org.example;

import jakarta.ws.rs.SeBootstrap;
import jakarta.ws.rs.core.Application;

import java.net.URI;

public class Main extends Application {
    public static void main(String[] args) throws InterruptedException {

        final SeBootstrap.Configuration config = SeBootstrap.Configuration.builder().build();

        SeBootstrap.start(HelloWorldResource.class, config).thenAccept(instance -> {
            instance.stopOnShutdown(stopResult ->
                    System.out.printf("Stop result: %s [Native stop result: %s].%n", stopResult,
                            stopResult.unwrap(Object.class)));
            final URI uri = instance.configuration().baseUri();
            System.out.printf("Instance %s running at %s [Native handle: %s].%n", instance, uri,
                    instance.unwrap(Object.class));
            System.out.println("Send SIGKILL to shutdown.");
        });

        Thread.currentThread().join();
    }
}