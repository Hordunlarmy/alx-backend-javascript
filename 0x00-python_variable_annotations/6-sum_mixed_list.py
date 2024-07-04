#!/usr/bin/env python3
""" Module to sum a list of floats. """

from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ Sum of a list of floats and integers. """

    return sum(mxd_lst)
