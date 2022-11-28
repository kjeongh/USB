# crud.py
# db에 직접 접근하여 create, read, update, delete 하는 함수를 관리하는 파일
from __future__ import annotations

from typing import List
from sqlalchemy.orm import Session
from fastapi import HTTPException
from datetime import datetime
from enum import Enum, auto

import models, schemas

def get_user(db: Session, user_id: int):
    return db.query(models.User).get(user_id);

def create_user(db: Session, user: schemas.UserCreate) -> models.User | None:
    try:
        db_user = models.User(user)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except Exception as ex:
        print(ex)
        return ex

def update_user(db: Session, user: schemas.User):
    db_user = db.query(models.User).get(user.id)
    if db_user == None:
        return -1  # 'insta_id_not_found'
    db_user.nickname = user.nickname
    db_user.email = user.email

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def delete_user(db: Session, user_id: int):
    db_user = db.query(models.User).filter_by(id=user_id).first()
    if db_user == None:
        raise HTTPException(status_code=404, detail="user is not found")
    if db_user.is_deleted:
        raise HTTPException(status_code=405, detail="user is already deleted")

    db.delete(db_user)
    db.commit()

    return {}


def get_todo(db: Session, user_id: int):
    return db.query(models.Todo).filter(models.Todo.user_id==user_id).all()

def create_todo(db: Session, todo: schemas.TodoCreate) -> models.Todo | None:
    try:
        db_todo = models.Todo(todo)
        db.add(db_todo)
        db.commit()
        db.refresh(db_todo)
        return db_todo
    except Exception as ex:
        print(ex)
        return ex

def update_todo(db: Session, todo: schemas.Todo):
    db_todo = db.query(models.Todo).get(todo.id)
    if db_todo == None:
        return -1  # 'insta_id_not_found'
    db_todo.task = todo.task
    db_todo.status = todo.status

    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo
