import express from 'express';
//import { CallbackError } from 'mongoose';

import Survey from '../Models/survey';
import User from '../Models/user';

import { UserDisplayName } from '../Util';

export function DisplaySurveyList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Survey.find(function(err, surveyCollection)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        //show the edit views
        res.render('index', {title: 'Survey List', page: 'survey-list', surveys: surveyCollection, displayName: UserDisplayName(req)});
        //res.json({success: true, msg: 'Movie-List Displayed Successfully', movies: moviesCollection, user: req.user});
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  //renders the add survey page
  res.render('index', { title: 'Add your survey', page: 'add-survey', surveys:'', displayName: UserDisplayName(req) });
  //res.json({success: true, msg: 'Add Page Displayed Successfully!'});
}

export function DisplayAddQuestionPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  //renders the add question survey page
  res.render('index', { title: 'Add your Questions', page: 'add-questions', surveys:'', displayName: UserDisplayName(req)});
  //res.json({success: true, msg: 'Add Page Displayed Successfully!'});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the db and read the survey into the edit page
  Survey.findById(id,{}, {}, function(err, surveyToEdit){
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else{
        res.render('index', { title: 'Edit your survey', page: 'edit-survey', surveys: surveyToEdit, displayName: UserDisplayName(req) });
    // show the edit view with the data
    }
  });
}

export async function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> 
{
  let name = UserDisplayName(req);
  
    // instantiate a new survey to Add
    try{
      const questions = await Survey.create({
        "QuestionType": req.body.surveyQType,
        "QuestionText": req.body.surveyQText
      });

      try{
        const survey = await Survey.create ({
          "Title": req.body.surveyTitle,
          "Owner": name,
          "isActive": req.body.surveyIsActive,
          "StartDate": req.body.surveyStartDate,
          "EndDate": req.body.surveyEndDate,
          "TotalQuestion": req.body.surveyTotal,
          "Question": [{"_id": questions._id,
                      "QuestionType": questions.QuestionType,
                      "QuestionText": questions.QuestionText}]});
      }
      catch(error){
        console.log("Error saving survey!");
      }
    }
    catch(error){
      console.log("Error saving question!");
    }
  // new survey has been added -> refresh the survey-list
  res.redirect('/view-survey');
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // instantiate a new survey to Edit
  let updatedSurvey = new Survey
  ({
    "_id": id,
    "Title": req.body.surveyTitle,
    "Owner": req.body.surveyOwner,
    "isActive": req.body.surveyIsActive,
    "StartDate": req.body.surveyStartDate,
    "EndDate": req.body.surveyEndDate
  });

  // update the survey in the database
  Survey.updateOne({_id: id}, updatedSurvey, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // edit was successful -> go to the view-survey page
    res.redirect('/view-survey');
    });
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the database and delete the survey
  Survey.remove({_id: id}, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // delete was successful
    res.redirect('/view-survey');
    });
}
