package dev.compo.example.annotations;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.lang.annotation.*;
@CrossOrigin(
        allowCredentials = "true",
        origins = "http://localhost:4200")
@RestController
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Documented
public @interface CompoController {

}
