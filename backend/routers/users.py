from fastapi import APIRouter, Depends, Header, HTTPException
from sqlalchemy.orm import Session

import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
import schemas, crud
from database import get_db

router = APIRouter(
    prefix="/api/v1/users",
    tags=["users"],
)
