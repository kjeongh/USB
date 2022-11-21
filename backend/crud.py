# crud.py
# db에 직접 접근하여 create, read, update, delete 하는 함수를 관리하는 파일
from __future__ import annotations

from typing import List
from sqlalchemy.orm import Session
from fastapi import HTTPException
from datetime import datetime
from enum import Enum, auto

import models, schemas
