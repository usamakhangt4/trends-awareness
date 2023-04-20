import * as R from "ramda";

export const isNothing = R.either(R.isEmpty, R.isNil);

export const isSomething = R.complement(isNothing);
