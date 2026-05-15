# BaconIpsum SDK utility: make_context

from core.context import BaconIpsumContext


def make_context_util(ctxmap, basectx):
    return BaconIpsumContext(ctxmap, basectx)
