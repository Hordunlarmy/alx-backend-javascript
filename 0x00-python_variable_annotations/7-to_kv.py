#!/usr/bin/env python3
""" Module to square a float. """

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ Returns a the square of an integer/float. """

    return (k, v ** 2)
