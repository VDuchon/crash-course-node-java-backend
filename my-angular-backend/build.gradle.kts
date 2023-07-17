plugins {
    id("java")
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("jakarta.platform:jakarta.jakartaee-web-api:10.0.0")
    implementation("jakarta.ws.rs:jakarta.ws.rs-api:3.1.0")
    implementation("org.glassfish.jersey.containers:jersey-container-grizzly2-http:3.1.2")
    implementation("org.glassfish.jersey.inject:jersey-hk2:3.1.2")
    implementation("org.glassfish.jersey.media:jersey-media-json-binding:3.1.2")
    implementation("org.glassfish.jersey.media:jersey-media-sse:3.1.2")
    testImplementation(platform("org.junit:junit-bom:5.9.1"))
    testImplementation("org.junit.jupiter:junit-jupiter")
}

tasks.test {
    useJUnitPlatform()
}