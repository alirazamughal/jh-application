package jh.defualt.application.cucumber.stepdefs;

import jh.defualt.application.JhDefaultApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = JhDefaultApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
