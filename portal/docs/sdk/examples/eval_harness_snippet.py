# Example: benchmark harness loop (illustrative only; not wired to a live API).
#
# Mirrors the consultant journey: same script, different robot_unit_id / session_id.

# from robocloud import RoboCloud  # future package


def run_benchmark(policy, session_id: str, safety_profile: str, trials: int = 50):
    # client = RoboCloud(session_id=session_id, safety_profile=safety_profile)
    results = []
    for trial in range(trials):
        # obs = client.observe()
        # action = policy(obs)
        # result = client.execute(action, idempotency_key=f"trial-{trial}")
        # results.append((trial, result))
        pass
    return results


if __name__ == "__main__":
    run_benchmark(policy=lambda o: {}, session_id="sess_7f3a9c2d", safety_profile="industrial-bench")
