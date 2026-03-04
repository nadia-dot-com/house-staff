type Reducer<S, A> = (state: S, action: A) => S;

export function createReducer<S, A extends { type: string }>(
  initialState: S,
  reducersMap: {
    [T in A["type"]]?: Reducer<S, Extract<A, { type: T }>>;
  },
) {
  return (state: S = initialState, action: A): S => {
    const reducer = reducersMap[action.type as A["type"]];

    if (!reducer) return state;

    type ActionForKey = Extract<A, { type: typeof action.type }>;

    return reducer(state, action as ActionForKey);
  };
}
